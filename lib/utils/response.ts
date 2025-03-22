type TResponse<TData> = {
  status: 'success' | 'error';
  code: number;
  data: TData | null;
  message: string;
  timestamp: string;
};

function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function createResponse<TData>(
  code: number,
  { data, message }: { data: TData | null; message: string }
): TResponse<TData> {
  return {
    status: code >= 200 && code < 300 ? 'success' : 'error',
    code,
    data,
    message,
    timestamp: formatTimestamp(new Date()),
  };
}
