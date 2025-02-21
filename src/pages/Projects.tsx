
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Renewable Energy Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* We'll add actual project cards here later */}
        <Card>
          <CardHeader>
            <CardTitle>Solar Farm Project</CardTitle>
            <CardDescription>Community solar installation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A 5MW solar farm installation to power local communities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
