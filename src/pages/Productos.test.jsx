import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Productos from "./Productos";
import { productosIniciales } from "../data/productos";

describe("Productos", () => {
    it("Debe mantener el favorito despues de filtrar y volver a Todas", () => {
        // 1. preparacion (ARRANGE)
        render(
            <BrowserRouter>
                <Productos productos={productosIniciales} onAgregarCarrito={() => {}} />
            </BrowserRouter>
        );
        const filtro = screen.getByLabelText(/Filtrar por categoría/i);
        fireEvent.click(screen.getAllByText("☆ Agregar a favoritos")[0]);

        // 2. ejecucion (ACT)
        fireEvent.change(filtro, { target: { value: "Prevención" } });
        fireEvent.change(filtro, { target: { value: "" } });

        // 3. verificacion (ASSERT)
        expect(screen.queryAllByText("★ Favorito").length).toBe(1);
    });
});