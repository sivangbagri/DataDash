import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export default function SparkLine({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={2}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      dataSource={data}
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}
