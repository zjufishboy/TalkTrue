import React from 'react';
import './index.less';
import { Model } from '@/component/model';
import { voidFunction } from '@/constants/types';
import { TTRank } from '@/biz-component/tt-rank';

interface ModelForClassProps {
    visable: boolean;
    name: string;
    onCancel: voidFunction;
    onOk: voidFunction;
}

export const ModelForClass: React.FC<ModelForClassProps> = (props) => {
    const { visable, name, onCancel, onOk } = props;
    const [value, setValue] = React.useState([0, 0, 0]);
    const setValueNo = (index: number) => (v: number) => {
        const NewValue = value;
        NewValue[index] = v;
        setValue([...NewValue]);
    }
    return (
        <Model
            width={208}
            height={242}
            visable={visable}
            onCancel={onCancel}
            onOK={onOk}
        >
            <div className="ttCommentContent">
                <div className="ttcc-tittle">
                    为<span>{name}</span>打分
                    </div>
                <div className="ttcc-suggestion">
                    <textarea className="ttcc-text" placeholder="建议/吐槽" />
                </div>
                <TTRank label="人品" value={value[0]} onChange={setValueNo(0)} />
                <TTRank label="课程" value={value[1]} onChange={setValueNo(1)} />
                <TTRank label="给分" value={value[2]} onChange={setValueNo(2)} />
                <button className="ttcc-send">
                    发送
                </button>
            </div>
        </Model>
    );
}