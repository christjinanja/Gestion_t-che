import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/constants.jsx";
import TasksTable from "../Task/TasksTable";
export default function Show({ auth, user, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Utilisateur "${user.name}"`}
        </h2>
      }
    >
      <Head title={`Utilisateur "${user.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={user.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">ID Utilisateur</label>
                    <p className="mt-1">{user.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Nom d'utilisateur</label>
                    <p className="mt-1">{user.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Statut de l'utilisateur</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          USER_STATUS_CLASS_MAP[user.status]
                        }
                      >
                        {USER_STATUS_TEXT_MAP[user.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Créé par</label>
                    <p className="mt-1">{user.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Date d'échéance</label>
                    <p className="mt-1">{user.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Date de création</label>
                    <p className="mt-1">{user.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Mis à jour par</label>
                    <p className="mt-1">{user.updatedBy.name}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Description de l'utilisateur</label>
                <p className="mt-1">{user.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TasksTable
                tasks={tasks}
                queryParams={queryParams}
                hideUserColumn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
