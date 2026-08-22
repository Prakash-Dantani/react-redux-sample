1.  npm create vite@latest app-name -- -- template react-ts
    command no use kari ne ek react project banavyo

2.  npm install @reduxjs/toolkit react-redux
    command no use kari ne redux ane redux toolkit libary install kari

3.  1 app folder banavi ne ena andar store.ts namani file banavi jema store generate kari ne export kari.

    `import { configureStore } from "@reduxjs/toolkit";
    import counterReducer from "../features/counter/counterSlice";

    export const store = configureStore({
    reducer: {
    counter: counterReducer,
    },
    });`

4.  main.tsx file na <App /> component ne react-redux na component ma wrap karisu and store ne provider ma pass karisu.
    `
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import "./index.css";
    import App from "./App.tsx";
    import { Provider } from "react-redux";
    import { store } from "./app/store";

        createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </StrictMode>,
        );

    `

5.  src folder ma ek features nam nu folder banavi ne tema activity pramane ek sub folder banavi ne tema slice banavisu for eaxample counter mate counter folder (je rakhvu hoy ae rakhi sakay) tema counterSlice.ts file banavisu.
    `
    import { createSlice } from "@reduxjs/toolkit";

        const initialState = {
        value: 0,
        };

        const counterSlice = createSlice({
        name: "counter",
        initialState,
        reducers: {
            increment: (state) => {
            state.value++;
            },
            decrement: (state) => {
            state.value--;
            },
            reset: (state) => {
            state.value = 0;
            },
        },
        });

        export const { increment, decrement, reset } = counterSlice.actions;
        export default counterSlice.reducer;

    `

6.  have chhele counter ne application ma use karisu tena mate je te compnent ma useSelector no use karisu
    `
    import { useDispatch, useSelector } from "react-redux";
    import { decrement, increment, reset} from "../../features/counter/counterSlice";

        export default function Counter() {
        const count = useSelector((state: any) => state.counter.value);

        const dispatch = useDispatch();

        return (
            <>
            <h1>{count}</h1>

            <button onClick={() => dispatch(increment())}>+</button>

            <button onClick={() => dispatch(decrement())}>-</button>

            <button onClick={() => dispatch(reset())}>Reset</button>
            </>
        );
        }

    `
