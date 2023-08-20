import { Select } from 'antd';
const { Option } = Select;

const listGender = (
    <Select defaultValue="Male">
        <Option value="Male">M</Option>
        <Option value="Female">F</Option>
    </Select>
);
const listCodePhone = (
    <Select defaultValue="US">
        <Option value="US">US</Option>
        <Option value="VI">VI</Option>
    </Select>
);

const CommonConst = {
    listGender,
    listCodePhone
}

export default CommonConst