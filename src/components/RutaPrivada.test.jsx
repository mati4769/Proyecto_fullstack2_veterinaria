import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import RutaPrivada from "./RutaPrivada";

describe("RutaPrivada", () => {
    it("Debe mandar al login si no hay sesion", () => {
        // 1. preparacion (ARRANGE)
        localStorage.clear();

        // 2. ejecucion (ACT)
        render(
            <BrowserRouter>
                <RutaPrivada>
                    <p>Panel admin</p>
                </RutaPrivada>
            </BrowserRouter>
        );

        // 3. verificacion (ASSERT)
        expect(screen.queryByText("Panel admin")).toBe(null);
        expect(window.location.pathname).toBe("/login");
    });
});