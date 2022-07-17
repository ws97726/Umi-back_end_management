import { Checkbox, Button } from 'antd';
import React, {
    useImperativeHandle,
    useReducer,
    useState,
    useEffect
} from 'react';

const filterList = (listA, listB) => {
    return listA.filter(item => {
        return !listB.some(ele => ele === item);
    })
}

export default ({ onRef, optionA, optionB }) => {
    const initialState = { optionA, optionB };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'left':
                return {
                    optionA: filterList(state.optionA, action.list),
                    optionB: [...action.list, ...state.optionB]
                }
            case 'right':
                return {
                    optionA: [...action.listT, ...state.optionA],
                    optionB: filterList(state.optionB, action.listT)
                }
            default:
                return {}
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    useImperativeHandle(onRef, () => state);
    const [list, setList] = useState([]);
    const [listT, setListT] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [disabledT, setDisabledT] = useState(false);

    useEffect(() => {
        setDisabled(list.length === 0);
    }, [list])
    useEffect(() => {
        setDisabledT(listT.length === 0);
    }, [listT])
    const onChange = (values) => setList(values);
    const onChangeT = (values) => setListT(values);


    return (
        <div style={{ width: 200, display: 'flex', justifyContent: 'space-between' }}>
            {
                optionA.length > 0 || optionB.length > 0 ? (
                    <>
                        <div style={{ width: 30 }}>
                            <Checkbox.Group options={state.optionA} onChange={onChange} value={list} />
                        </div>
                        <div style={{ width: 50 }}>
                            <Button
                                type='primary'
                                disabled={disabled}
                                onClick={() => {
                                    dispatch({ type: 'left', list });
                                    setList([]);
                                }}
                            >
                                》
                            </Button>
                            <Button
                                type='primary'
                                disabled={disabledT}
                                onClick={() => {
                                    dispatch({ type: 'right', listT });
                                    setListT([]);
                                }}
                            >
                                《
                            </Button>
                        </div>
                        <div style={{ width: 30 }}>
                            <Checkbox.Group options={state.optionB} onChange={onChangeT} value={listT} />
                        </div>
                    </>
                ) : ''
            }
        </div>
    )
}