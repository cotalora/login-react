export const initialState = {
    status: 'not-authenticated',
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    errorMessage: '',
    accessToken: ''
}

export const authenticatedState = {
    status: 'authenticated',
    uid: 'Dvp6HKbAKRVKCyjBQeD5CoRGRAo2',
    email: 'cotalora@i4digital.com',
    displayName: 'Cristian Yesid Otálora Rodríguez',
    photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu0Pwpb43yuZnHq_O8Xo8yrDQ-5894y46UFt3wa2=s96-c',
    errorMessage: '',
    accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4NWI5MGI1OWM2YjM2ZDNjOTBkZjBlOTEwNDQ1M2U2MmY4ODdmNzciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQ3Jpc3RpYW4gWWVzaWQgT3TDoWxvcmEgUm9kcsOtZ3VleiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BTG01d3UwUHdwYjQzeXVabkhxX084WG84eXJEUS01ODk0eTQ2VUZ0M3dhMj1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9qb3VybmFsLWFwcC1jM2E0NCIsImF1ZCI6ImpvdXJuYWwtYXBwLWMzYTQ0IiwiYXV0aF90aW1lIjoxNjY0NDg4MDUxLCJ1c2VyX2lkIjoiRHZwNkhLYkFLUlZLQ3lqQlFlRDVDb1JHUkFvMiIsInN1YiI6IkR2cDZIS2JBS1JWS0N5akJRZUQ1Q29SR1JBbzIiLCJpYXQiOjE2NjQ0ODgwNTEsImV4cCI6MTY2NDQ5MTY1MSwiZW1haWwiOiJjb3RhbG9yYUBpNGRpZ2l0YWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTE1MzAwNzAxNzg1NDg1Nzg0MjIiXSwiZW1haWwiOlsiY290YWxvcmFAaTRkaWdpdGFsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.qNcB9JGSWgvPYyGlk-OtPhM-r0-IbG6QcQfN0mU9hUjaDHi4wukc7cLo-9Pjaheg7sh5G2kQLFSp_PedV2zkxTBgRtwyz_82MZyP4XHgXRhlSkMeHSvFX5Q8sgBK2O0inT79FIFta11_4Icr-qf9P_PJDKmtiTMxzGQ0RxIIPPXbJ-LnkXtMbWwi7CZtDXcVc2-2GL-CKgN1307EPUNKGlxT7aJjBu0LTK4VmgCq7bPpdjRjTY3Rebqfmvyo0z4upwjl57V6x7kDhGdcjSLY27CGhvLJW1VZAOFofH6_Ts7Lwxr2fAP3JuU8nEVJGPytCZ79RvYWElCWkTVnsupsCQ'
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    errorMessage: '',
    accessToken: ''
}