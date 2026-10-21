import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import FormularioRegistro from "./FormularioRegistro";

describe("FormularioRegistro", () => {
    it('Debe mostrar error si el nombre de la mascota tiene numeros ("Toby1")', () => {
        // 1. preparacion (ARRANGE)
        window.alert = vi.fn(); // reemplaza el alert para poder revisar su mensaje
        render(
            <BrowserRouter>
                <FormularioRegistro />
            </BrowserRouter>
        );
        fireEvent.change(screen.getByLabelText(/^Nombre :/i), { target: { value: "Matias" } });
        fireEvent.change(screen.getByLabelText(/Apellido/i), { target: { value: "Acevedo" } });
        fireEvent.change(screen.getByLabelText(/Correo electronico/i), { target: { value: "matias@gmail.com" } });
        fireEvent.change(screen.getByLabelText(/Telefono/i), { target: { value: "+56912345678" } });
        fireEvent.change(screen.getByLabelText(/Fecha de nacimiento/i), { target: { value: "2000-01-01" } });
        fireEvent.change(screen.getByLabelText(/Nombre de su mascota/i), { target: { value: "Toby1" } });

        // 2. ejecucion (ACT)
        fireEvent.click(screen.getByText("REGISTRARSE"));

        // 3. verificacion (ASSERT)
        expect(window.alert).toHaveBeenCalledWith("El nombre de la mascota debe contener solo letras");
    });

    it("Debe mostrar error si el nombre tiene solo espacios", () => {
        // 1. preparacion (ARRANGE)
        window.alert = vi.fn();
        render(
            <BrowserRouter>
                <FormularioRegistro />
            </BrowserRouter>
        );
        fireEvent.change(screen.getByLabelText(/^Nombre :/i), { target: { value: "   " } });

        // 2. ejecucion (ACT)
        fireEvent.click(screen.getByText("REGISTRARSE"));

        // 3. verificacion (ASSERT)
        expect(window.alert).toHaveBeenCalledWith("El nombre debe contener solo letras");
    });
});