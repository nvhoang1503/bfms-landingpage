import { MENU_TYPE_DEFAULT_PATH } from "constants/MenuType"

const overviewNavTree = [{
    key: 'overview',
    path: '/',
    title: 'Tổng quan',
    type: MENU_TYPE_DEFAULT_PATH
}]

const farmPlanNavTree = [{
    key: 'plan',
    path: '/',
    title: 'Kế hoạch canh tác',
    type: MENU_TYPE_DEFAULT_PATH
}]

const zonePlanNavTree = [{
    key: 'zone',
    path: '/',
    title: 'Vùng canh tác',
    type: MENU_TYPE_DEFAULT_PATH
}]

const reportNavTree = [{
    key: 'report',
    path: '/',
    title: 'Báo cáo công việc',
    type: MENU_TYPE_DEFAULT_PATH
}]

const statisticNavTree = [{
    key: 'statistic',
    path: '/',
    title: 'Thống kê',
    type: MENU_TYPE_DEFAULT_PATH
}]

const tracingNavTree = [{
    key: 'tracing',
    path: '/',
    title: 'Truy xuất nguồn gốc',
    type: MENU_TYPE_DEFAULT_PATH
}]

const navigationConfig = [
    ...overviewNavTree,
    ...farmPlanNavTree,
    ...zonePlanNavTree,
    ...reportNavTree,
    ...statisticNavTree,
    ...tracingNavTree
]

export default navigationConfig