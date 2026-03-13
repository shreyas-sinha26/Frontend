import { createBrowserRouter } from "react-router";
import { Dashboard } from "./components/Dashboard";
import { SOSEmergency } from "./components/SOSEmergency";
import { MeshChat } from "./components/MeshChat";
import { ResourceBoard } from "./components/ResourceBoard";
import { NetworkMap } from "./components/NetworkMap";
import { WalkieTalkie } from "./components/WalkieTalkie";
import { AIAssistant } from "./components/AIAssistant";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "sos", Component: SOSEmergency },
      { path: "chat", Component: MeshChat },
      { path: "resources", Component: ResourceBoard },
      { path: "map", Component: NetworkMap },
      { path: "walkie", Component: WalkieTalkie },
      { path: "ai", Component: AIAssistant },
    ],
  },
]);
