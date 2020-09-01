import React from "react";
import "./index.less";
import { Rank } from "@/component/rank";

interface RankProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
}

export const TTRank: React.FC<RankProps> = (
  props: RankProps
) => {
  const {
    label,
    value,
    onChange,
  } = props;
  return (
    <div className="tt-rank">
      <div className="tt-rank-label">
        {label}
      </div>
      <div>
        <Rank
          value={value}
          maxValue={5}
          onChange={onChange}
          isClick
        />
      </div>
    </div>
  );
};
