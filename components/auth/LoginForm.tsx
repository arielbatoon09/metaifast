"use client";
import { toast } from "sonner";

export function LoginForm() {
  return (
    <div>
      <button
        className="toast-button"
        onClick={() => {
          toast.success('My cancel toast', {
            description: 'With a description and an icon',
            duration: 2000,
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancel!'),
            },
          });
        }}
      >
        Render toast
      </button>
    </div>
  )
}
