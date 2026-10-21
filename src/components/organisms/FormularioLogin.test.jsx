import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import FormularioLogin from "./FormularioLogin";

describe("FormularioLogin", () => {
    it("Debe guardar la sesion en localStorage con credenciales correctas", () => {
        // 1. preparacion (ARRANGE)
        localStorage.clear();
        window.alert = vi.fn();
        render(
            <BrowserRouter>
                <FormularioLogin />
            </BrowserRouter>
        );
        fireEvent.change(screen.getByLabelText(/Correo electronico/i), { target: { value: "admin@duocuc.cl" } });
        fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: "Admin1234" } });

        // 2. ejecucion (ACT)
        fireEvent.click(screen.getByText("ENVIAR"));

        // 3. verificacion (ASSERT)
        expect(localStorage.getItem("sesion")).toBe("admin@duocuc.cl");
    });

    it("No debe guardar la sesion si la contraseña es incorrecta", () => {
        // 1. preparacion (ARRANGE)
        localStorage.clear();
        window.alert = vi.fn();
        render(
            <BrowserRouter>
                <FormularioLogin />
            </BrowserRouter>
        );
        fireEvent.change(screen.getByLabelText(/Correo electronico/i), { target: { value: "admin@duocuc.cl" } });
        fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: "Clave9999" } });

        // 2. ejecucion (ACT)
        fireEvent.click(screen.getByText("ENVIAR"));

        // 3. verificacion (ASSERT)
        expect(window.alert).toHaveBeenCalledWith("Correo o contraseña incorrectos");
        expect(localStorage.getItem("sesion")).toBe(null);
    });
});