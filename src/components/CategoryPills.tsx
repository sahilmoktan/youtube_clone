import { Button } from "./Button";

export function CategoryPills(){
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowarp gap-3 transition-transform w-[max-content] ">
                <Button
                 className="py-1 px-3 rounded-lg whitespace-nowarp">
                All
                </Button>
                <Button className="py-1 px-3 rounded-lg whitespace-nowarp">
                JavaScript
                </Button>
            </div>
        </div>
    )
}