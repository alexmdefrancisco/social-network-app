export interface UseCase<T> {
    run(): Promise<T>
}