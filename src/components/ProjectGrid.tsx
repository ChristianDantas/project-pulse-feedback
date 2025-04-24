
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    id: "1",
    name: "Annual Tech Conference",
    status: "active",
    grade: 4,
    description: "Feedback collection for our annual developer conference",
    dueDate: "2025-05-15",
  },
  {
    id: "2",
    name: "Product Launch Event",
    status: "pending",
    grade: 3,
    description: "Customer feedback for new product launch",
    dueDate: "2025-06-01",
  },
  {
    id: "3",
    name: "Team Building Workshop",
    status: "completed",
    grade: 5,
    description: "Participant feedback for team building activities",
    dueDate: "2025-04-30",
  },
  {
    id: "4",
    name: "Leadership Summit",
    status: "active",
    grade: 4,
    description: "Executive feedback for leadership training",
    dueDate: "2025-05-20",
  },
] as const;

const ProjectGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
