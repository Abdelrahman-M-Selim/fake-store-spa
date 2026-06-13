import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "./Button";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-5 animate-fadeIn">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-red-400" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-slate-200">
          Something went wrong
        </h3>
        <p className="text-sm text-slate-400 max-w-md">{message}</p>
      </div>
      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
