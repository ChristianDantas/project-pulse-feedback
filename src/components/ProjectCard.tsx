
import { Card } from "@/components/ui/card";

interface Project {
  id: string;
  name: string;
  status: "active" | "completed" | "pending";
  grade: number;
  description: string;
  dueDate: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{project.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.description}</p>
          </div>
          <div className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${project.status === 'active' ? 'bg-green-100 text-green-800' : ''}
            ${project.status === 'completed' ? 'bg-blue-100 text-blue-800' : ''}
            ${project.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
          `}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < project.grade ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">Due: {project.dueDate}</span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
