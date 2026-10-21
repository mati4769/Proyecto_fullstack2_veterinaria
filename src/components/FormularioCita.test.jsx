import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import FormularioCita from "./FormularioCita";

describe("FormularioCita", () => {
    it("No debe registrar una cita con una fecha que ya paso", () => {
        // 1. preparacion (ARRANGE)
        window.alert = vi.fn();
        const agregarMock = vi.fn(); // funcion falsa para saber si se agrego la cita
        render(<FormularioCita onAgregar={agregarMock} />);
        fireEvent.change(screen.getByLabelText(/Nombre del dueño/i), { target: { value: "Marcela Rojas" } });
        fireEvent.change(screen.getByLabelText(/Nombre de la mascota/i), { target: { value: "Luna" } });
        fireEvent.change(screen.getByLabelText(/Motivo/i), { target: { value: "Vacunación" } });
        fireEvent.change(screen.getByLabelText(/Fecha/i), { target: { value: "2020-01-01" } });
        fireEvent.change(screen.getByLabelText(/Hora/i), { target: { value: "10:00" } });

        // 2. ejecucion (ACT)
        fireEvent.click(screen.getByText("Solicitar cita"));

        // 3. verificacion (ASSERT)
        expect(agregarMock).not.toHaveBeenCalled();
    });
});