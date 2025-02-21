
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Profile</h1>
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white border-green-100">
          <CardHeader>
            <CardTitle className="text-black">User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1 text-black">Connected Wallet</h3>
                <p className="text-gray-600">Not connected</p>
              </div>
              <div>
                <h3 className="font-medium mb-1 text-black">Role</h3>
                <p className="text-gray-600">User</p>
              </div>
              <div>
                <h3 className="font-medium mb-1 text-black">Projects</h3>
                <p className="text-gray-600">No projects yet</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
