import GaugeComponent from "react-gauge-component";

export const GaugeMeter = ({ score, description, color }: { score: number, description: string, color: string }) => {
    return (
      <div className="flex justify-center relative">
   <GaugeComponent
        id="gauge-component4"
        style={{ width: "100%", height: "100%" }}
        type="semicircle"
        labels={{
          tickLabels: {

            type: "outer",
            defaultTickLineConfig: { hide: true },
            defaultTickValueConfig: { style: { fontSize: 16 } },
            ticks: [
              { value: 6 },
              { value: 9 },
              { value: 12 },
              { value: 16 },
            ]
          },
          valueLabel: { matchColorWithArc: true, style: { fontSize: 42, textShadow: 'none' }, },
        }}
        arc={{
          colorArray: ['#9AE179', '#169CD5', '#FFB500', '#F66A6A'],
          subArcs: [{ limit: 6 }, { limit: 9 }, { limit: 12 }, { limit: 16 }],
          padding: 0.05,
          width: 0.15,
          cornerRadius: 0,

        }}
        marginInPercent={{ top: 0.04, bottom: 0.00, left: 0.07, right: 0.07 }}
        maxValue={16}
        value={Number(score)}
        pointer={{ type: "arrow", width: 12, length: 5, color: "#181818" }}
        minValue={0}
      />
      <span className={`font-medium absolute bottom-10 left-50 font-bold text-2xl ${color}`}>
        {description}
      </span>
    </div>
       
    );
  };
  