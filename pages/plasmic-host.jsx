import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import LoginForm from "../components/LoginForm"

registerComponent(LoginForm, {
  name: "LoginForm",
  importPath: "../components/LoginForm",
  props: {
    username: {
      type: "string",
      defaultValue: "User"
    },
    password: {
      type: "string",
      defaultValue: "Pass"
    }
  }
})

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
