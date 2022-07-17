import Transfer from '@/pages/Hoc/Component/Transfer';
import { Button, Form } from 'antd';
import Hoc from './Hoc';


const Btn = (props) => {
    return (
        <Hoc {...props}>
            <Transfer
                optionA={['a', 'b', 'c']}
                optionB={['d', 'e', 'f']}
                onRef={null}
            />
        </Hoc>
    )
}

export default Btn;