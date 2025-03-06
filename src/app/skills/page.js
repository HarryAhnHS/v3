import SkillGraph from "../components/SkillGraph";

export default function Skills() {
    return (
        <div className="relative flex items-center px-3 sm:px-6">
            <div className="fade-in w-screen gap-2 ">
                <h3 className="italic text-gray-700 dark:text-gray-200 mb-2">check out my tech stack:</h3>
                <div className="w-full h-[700px] space-y-2 flex items-center justify-center rounded-sm">
                {/* Node graph using d3js */}
                    <SkillGraph />
                </div>
            </div>
        </div>
    );
}