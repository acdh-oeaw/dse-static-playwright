export async function fetchTestData<T>(fileName: string): Promise<Array<T>> {
  let TestData: Array<T>;
  try {
    const data_module = await import(`../test-data/${fileName}`, { with: { type: "json" } }) as { default: Array<T> };
    TestData = data_module.default;
  } catch (err) {
    TestData = [];
  }
  return TestData;
}