import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Carrito from "./Carrito";

describe("Carrito", () => {
    it("Debe sumar el total de los productos del carrito", () => {
        // 1. preparacion (ARRANGE)
        const carritoMock = [
            { id: 1, titulo: "Consulta general", precio: 15000 },
            { id: 2, titulo: "Vacunación", precio: 12000 }
        ];

        // 2. ejecucion (ACT)
        render(
            <BrowserRouter>
                <Carrito carrito={carritoMock} onQuitar={() => {}} onVaciar={() => {}} />
            </BrowserRouter>
        );

        // 3. verificacion (ASSERT)
        expect(screen.getByText("Total a pagar: $27000 CLP")).toBeInTheDocument();
    });
});