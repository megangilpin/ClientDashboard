import Admin from '../pages/Admin';
import ClientTable from '../components/ClientTable';
import ClientDialog from '../components/ClientDialog';
import MemberList from '../components/MemberList';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import ListItem from '@material-ui/core/ListItem';
import { filteredMembers, clients } from '../testutils';

describe('<Admin /> rendering', () => {
  it('should render a <Typography /> for Nav', () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});

describe('<ClientTable /> rendering', () => {
  it('should render <TableRow /> for number of clients', () => {
    const wrapper = mount(<ClientTable clients={clients} />);
    expect(wrapper.find(TableRow)).toHaveLength(3);
  });
  it('should render correctly', () => {
    const tree = renderer.create(<ClientTable clients={clients} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<ClientDialog /> rendering', () => {
  it('should render <Typography />', () => {
    const wrapper = mount(<ClientDialog clientId={1} open={true} />);
    expect(wrapper.find(Typography)).toHaveLength(12);
  });
});

describe('<MemberList /> rendering', () => {
  it('should render <ListItem /> for number of members', () => {
    const wrapper = mount(<MemberList members={filteredMembers} />);
    expect(wrapper.find(ListItem)).toHaveLength(1);
  });
  it('should render correctly', () => {
    const tree = renderer
      .create(<MemberList members={filteredMembers} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
