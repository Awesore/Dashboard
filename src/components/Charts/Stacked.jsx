import React from 'react';
import {
    ChartComponent,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    StackingColumnSeries,
    Tooltip,
    SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import {stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";

const Stacked = ({width, height}) => {
    const {currentMode} = useStateContext();
    return (
       <ChartComponent
            height={height}
            width={width}
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{border: {width: 0}}}
            tooltip={{enable: true}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{background: 'white'}}
       >
           <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]}/>
           <SeriesCollectionDirective>
               {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
           </SeriesCollectionDirective>
       </ChartComponent>
    );
};

export default Stacked;