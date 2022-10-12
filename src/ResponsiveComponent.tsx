import { Component } from "react";
import { Dimensions, ScaledSize } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ResponsiveComponentProps {}

interface ResponsiveComponentState {
  window: ScaledSize;
}

export default abstract class ResponsiveComponent extends Component<
  ResponsiveComponentProps,
  ResponsiveComponentState
> {
  listener: any = undefined;
  state = {
    window: Dimensions.get("window"),
  };

  componentDidMount() {
    this.listener = Dimensions.addEventListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  onDimensionChange = (dims: ResponsiveComponentState) => this.setState(dims);
}
