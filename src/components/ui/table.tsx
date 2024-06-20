import { Badge } from "./badge";
import { Button } from "./button";

const Table = ({ data }: { data: any }) => {
  return (
    <div>
      <table className="w-full table-auto divide-y divide-border">
        <thead>
          <tr>
            <th className="px-3 py-2 text-start">Innovator's name</th>
            <th className="px-3 py-2 text-start">Projects</th>
            <th className="px-3 py-2 text-start">Risk score</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((item: any) => (
            <tr>
              <td className="px-3 py-2 content-start">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="innovator-image"
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td className="px-3 py-2 content-start">
                <ul className="flex flex-col">
                  {item.projects.map((projectItem: string, Index: number) => (
                    <li key={Index}>{projectItem}</li>
                  ))}
                </ul>
              </td>

              <td className="px-3 py-2">
                <div className="w-full flex flex-col items-start gap-1">
                  {item.risks.map((item: any, Index: number) => (
                    <div className="w-full flex justify-between items-center">
                      <Badge
                        key={Index}
                        variant={
                          item === "Low risk"
                            ? "info"
                            : item === "Medium risk"
                            ? "success"
                            : item === "High risk"
                            ? "destructive"
                            : "outline"
                        }
                      >
                        {item}
                      </Badge>
                      <Button variant="outline" >View Dashboard</Button>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
