interface ParsedValueParams {
  value: string;
  valueType?: "integer" | "decimal";
}
export function getParsedValue({ value, valueType }: ParsedValueParams): number {
  return valueType === 'integer' ? parseInt(value, 10) : parseFloat(value);
}