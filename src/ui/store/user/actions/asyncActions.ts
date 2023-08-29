import { createAsyncThunk } from '@reduxjs/toolkit'

// Domain imports
import { userSignInUseCase, userSignUpUseCase } from '@domain/useCases'
import { getUserUseCase } from '@domain/useCases'

export const fetchUserData = createAsyncThunk('user/fetchUserData', async function () {
    const interactor = getUserUseCase()
    const user = await interactor.run()
    return user.toSerializableObject()
})

export const signIn = createAsyncThunk('user/signIn', async function () {
    const interactor = userSignInUseCase()
    const userId = await interactor.run()
    return userId
})

export const signUp = createAsyncThunk('user/signUp', async function ({ email, password }: { email: string, password: string }) {
    const interactor = userSignUpUseCase()
    const userId = await interactor.run(email, password)
    return userId
})