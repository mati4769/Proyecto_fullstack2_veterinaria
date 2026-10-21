import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import FormularioProducto from "./FormularioProducto";

describe("FormularioProducto", () => {
    it("Debe mostrar error si la descripcion tiene solo espacios", () => {
        // 1. preparacion (ARRANGE)
        window.alert = vi.fn();
        render(<FormularioProducto onAgregar={vi.fn()} />);
        fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: "Baño y corte" } });
        fireEvent.change(screen.getByLabelText(/Descripción/i), { target: { value: "   " } });
        fireEvent.change(screen.getByLabelText(/Precio/i), { target: { value: "12000" } });
        fireEvent.change(screen.getByLabelText(/Categoría/i), { target: { value: "Atención" } });

        // 2. ejecucion (ACT)
        fireEvent.click(screen.getByText("Agregar producto"));

        // 3. verificacion (ASSERT)
        expect(window.alert).toHaveBeenCalledWith("Debe ingresar una descripción");
    });
});