import { useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode;

};

const ParentComponent = ({ render } : ParentComponentProps) => {
    const [data] = useState<string[]>([
        "Daniel Trinidad",
        "Luis Trinidad",
        "Jorge Trinidad",
    ]);
    
    return (
        <ul>
            {
                render(data)
            }
        </ul>
    )
};

export default ParentComponent;
