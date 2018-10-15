import describeWithCustomClass from "../../testing/describeWithCustomClass";
import describeWithNoProps from "../../testing/describeWithNoProps";
import TextArea from "./index";

describe("TextArea component", () => {
  describeWithNoProps(TextArea);

  describeWithCustomClass(TextArea);
});
