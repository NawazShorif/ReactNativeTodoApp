
import renderer from "react-test-renderer";
import App from "./App";

describe("App", () => {
    it("has 1 child",  () => {
        const rootView =  renderer.create(<App />).toJSON();
      expect(rootView.children.length).toBe(1);
    });
  });