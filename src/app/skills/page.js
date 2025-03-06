import SkillGraph from "../components/SkillGraph";

export default function Skills() {
    return (
        <div className="relative flex items-center">
            <div className="fade-in w-screen">
                <h3 className="italic text-gray-700 dark:text-gray-200">check out my skills graph:</h3>
                <div className="w-full h-[750px] space-y-2 flex items-center justify-center">
                {/* Node graph using d3js */}
                    <SkillGraph />
                </div>
            </div>
        </div>
    );
}