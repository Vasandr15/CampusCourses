export const routes = {
    root : () => '/',
    registration : () => '/registration/',
    login : () => '/login/',
    profile : () => '/profile',
    groups : () => '/groups/',
    group : (id) => `/groups/${id || ":groupId"}`,
    my: () => '/courses/my',
    teaching : () => '/courses/teaching',
    course : (id) => `/courses/${id || ":courseId"}`
}