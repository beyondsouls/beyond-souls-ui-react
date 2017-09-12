import { shallow } from "enzyme";
import Icon from "./Icon";

describe("Icon", () => {
    it("should match the snapshot", () => {
        const tree = shallow(<Icon name="heart" />);
        expect(tree).toMatchSnapshot();
    });
});
