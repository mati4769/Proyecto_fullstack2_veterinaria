import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import TarjetaProducto from "./TarjetaProducto";

describe("TarjetaProducto", () => {
    it('Debe cambiar el boton a "★ Favorito" al hacer clic', () => {
        // 1. preparacion de datos (ARRANGE)
        const productoMock = {
            id: 1,
            imagen: "imagen-test.jpg",
            titulo: "Consulta test",
            descripcion: "Consulta generica test",
            precio: 15000
        };
        render(
            <BrowserRouter>
                <TarjetaProducto {...productoMock} />
            </BrowserRouter>
        );

        // 2. ejecucion (ACT)
        const boton = screen.getByText("☆ Agregar a favoritos");
        fireEvent.click(boton);

        // 3. verificacion (ASSERT)
        expect(boton.textContent).toBe("★ Favorito");
    });
});