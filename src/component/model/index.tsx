import React from 'react';
import './index.less';

interface ModelProps{
    /**
     * 子节点
     */
    children:React.ReactChild;
    /**
     * 尺寸
     */
    width?:number|string;
    height?:number|string;
    visable:boolean;
    onCancel:()=>void;
    onOK:()=>void;
}

export const Model:React.FC<ModelProps>=({children,width="75%",height="75%",visable,onCancel}:ModelProps)=>{
    // const [display,setDisplay]=React.useState(false);
    const [loading,setLoading]=React.useState(false);
    const modelContentStyle={width,height}
    React.useEffect(()=>{
        // setDisplay(true);
    })
    const getContentClassName=()=>{
        const cls=["model-content"];
        cls.push(visable?"model-content-show":"model-content-hide");
        return cls.join(" ");
    }
    const handleCoverClick=()=>{
        onCancel();
        setTimeout(()=>{
            setLoading(!loading);
        },200);
    }
    const handleContentClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
    }
    const renderModel=()=>(
        <div 
            className="model-outside" 
            onClick={handleCoverClick}
            style={{zIndex:visable?10:-1}}
        >
            <div 
                className={getContentClassName()} 
                style={visable?modelContentStyle:{}}
                onClick={handleContentClick}
            >
                {visable && loading && children}
            </div>
        </div>
    )
    return (
        <>
            {renderModel()}
        </>
       
    );
}