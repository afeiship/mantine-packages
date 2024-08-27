import MantineFormValidators from '@jswork/mantine-form-validators/src/main';
import '@jswork/mantine-form-validators/src/style.scss';
import { scanVite } from '@jswork/scan-modules';

function App() {
  const moduleFiles = import.meta.glob('./shared/rules/**/*.ts', { eager: true });
  const modules = scanVite(moduleFiles, { modules: '/rules/' });
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">Build Time: {BUILD_TIME}</div>
      <MantineFormValidators modules={modules} />
    </div>
  );
}

export default App;
