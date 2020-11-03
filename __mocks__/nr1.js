import React from 'react';

const defaultOptions = {
    tagType: 'div',
};

function proxyStaticProperties(element) {
    /**
     * These properties are the list of static properties that nr1 components can have.
     * Every property is an object with more properties inside, so this function will automatically
     * add one proxy for the first access of the property, and an echo for the second access.
     *
     */
    const ALLOWED_STATICS = [
        'SPACING_TYPE',
        'TYPE',
        'TAG_TYPE',
        'DIRECTION_TYPE',
        'GAP_TYPE',
        'HORIZONTAL_TYPE',
        'VERTICAL_TYPE',
        'ICON_TYPE',
        'SIZE_TYPE',
        'PLACEMENT_TYPE',
        'SORTING_TYPE',
        'ALIGNMENT_TYPE',
        'propTypes',
    ];

    const echoPropProxy = () => {
        return new Proxy(
            {},
            {
                get(target, prop) {
                    return prop;
                },
            }
        );
    };

    const handler = {
        get(target, prop) {
            // Return first a new proxy so any access to the next property will be an echo
            if (ALLOWED_STATICS.includes(prop)) {
                return echoPropProxy();
            }

            // If property is not an allowed one, we just return the expected response for that property.
            return Reflect.get(...arguments);
        },
    };

    return new Proxy(element, handler);
}

const getComponent = (componentName, options) => {
    const component = ({ children, ...props }) => {
        const { 'data-test-id': dataTestId, tagType, ...otherProps } = props;
        const testId = dataTestId || `nr1-mock-${componentName.toLowerCase()}`;
        const Tag =
            (tagType && tagType.toLowerCase()) ||
            (options && options.tagType) ||
            defaultOptions.tagType;

        if (typeof children === 'function') {
            const reactComponentCallback = reactComponentCallbacks[componentName];

            if (!reactComponentCallback) {
                throw new Error(`Register a component callback to mock ${componentName}`);
            }

            children = reactComponentCallback(children);
        }

        return (
            <Tag data-test-id={testId} {...otherProps}>
                {children}
            </Tag>
        );
    };

    component.displayName = componentName;

    return proxyStaticProperties(component);
};

export const AccountPicker = getComponent('AccountPicker');
export const Button = getComponent('Button', { tagType: 'button' });
export const Checkbox = getComponent('Checkbox');
export const Dropdown = getComponent('Dropdown');
export const DropdownItem = getComponent('DropdownItem');
export const Radio = getComponent('Radio');
export const RadioGroup = getComponent('RadioGroup');
export const Select = getComponent('Select', { tagType: 'select' });
export const SelectItem = getComponent('SelectItem', { tagType: 'option' });
export const TextField = getComponent('TextField', { tagType: 'input' });

export const Table = getComponent('Table');
export const TableHeader = getComponent('TableHeader');
export const TableHeaderCell = getComponent('TableHeaderCell');
export const TableRow = getComponent('TableRow');
export const TableRowCell = getComponent('TableRowCell');
export const EntityTitleTableRowCell = getComponent('EntityTitleTableRowCell');
export const MetricTableRowCell = getComponent('MetricTableRowCell');
export const SparklineTableRowCell = getComponent('SparklineTableRowCell');
export const UserTableRowCell = getComponent('UserTableRowCell');

export const Icon = getComponent('Icon');
export const Spinner = getComponent('Spinner');
export const Toast = getComponent('Toast');

export const Modal = getComponent('Modal');
export const Tooltip = getComponent('Tooltip');

export const AutoSizer = getComponent('AutoSizer');
export const Card = getComponent('Card');
export const CardBody = getComponent('CardBody');
export const CardHeader = getComponent('CardHeader');
export const Grid = getComponent('Grid');
export const GridItem = getComponent('GridItem');
export const List = getComponent('List');
export const ListItem = getComponent('ListItem');
export const Spacing = getComponent('Spacing');
export const Stack = getComponent('Stack');
export const StackItem = getComponent('StackItem');
export const Tabs = getComponent('Tabs');
export const TabsItem = getComponent('TabsItem');

export const BlockText = getComponent('BlockText');
export const HeadingText = getComponent('HeadingText');
export const Link = getComponent('Link');

export const AreaChart = getComponent('AreaChart');
export const BarChart = getComponent('BarChart');
export const BillboardChart = getComponent('BillboardChart');
export const ChartGroup = getComponent('ChartGroup');
export const FunnelChart = getComponent('FunnelChart');
export const HeatmapChart = getComponent('HeatmapChart');
export const HistogramChart = getComponent('HistogramChart');
export const JsonChart = getComponent('JsonChart');
export const LineChart = getComponent('LineChart');
export const PieChart = getComponent('PieChart');
export const ScatterChart = getComponent('ScatterChart');
export const SparklineChart = getComponent('SparklineChart');
export const StackedBarChart = getComponent('StackedBarChart');
export const TableChart = getComponent('TableChart');

export const AccountStorageMutation = getComponent('AccountStorageMutation');
export const AccountStorageQuery = getComponent('AccountStorageQuery');
export const AccountsQuery = getComponent('AccountsQuery');
export const EntitiesByDomainTypeQuery = getComponent('EntitiesByDomainTypeQuery');
export const EntitiesByGuidsQuery = getComponent('EntitiesByGuidsQuery');
export const EntitiesByNameQuery = getComponent('EntitiesByNameQuery');
export const EntityByGuidQuery = getComponent('EntityByGuidQuery');
export const EntityCountQuery = getComponent('EntityCountQuery');
export const EntitySearchQuery = getComponent('EntitySearchQuery');
export const EntityStorageMutation = getComponent('EntityStorageMutation');
export const EntityStorageQuery = getComponent('EntityStorageQuery');
export const NerdGraphMutation = getComponent('NerdGraphMutation');
export const NerdGraphQuery = getComponent('NerdGraphQuery');
export const NrqlQuery = getComponent('NrqlQuery');
export const UserQuery = getComponent('UserQuery');
export const UserStorageMutation = getComponent('UserStorageMutation');
export const UserStorageQuery = getComponent('UserStorageQuery');

export const NerdletStateContext = {
  Consumer: ({children}) => children({})
};
export const PlatformStateContext = {
  Consumer: ({children}) => children({})
};
export const logger = {
    error: jest.fn(),
    log: jest.fn(),
    warn: jest.fn(),
};
export const navigation = {
    getOpenEntityLocation: jest.fn(),
    getOpenLauncherLocation: jest.fn(),
    getOpenNerdletLocation: jest.fn(),
    getOpenOverlayLocation: jest.fn(),
    getOpenStackedEntityLocation: jest.fn(),
    getOpenStackedNerdletLocation: jest.fn(),
    getReplaceNerdletLocation: jest.fn(),
    openEntity: jest.fn(),
    openLauncher: jest.fn(),
    openNerdlet: jest.fn(),
    openOverlay: jest.fn(),
    openStackedEntity: jest.fn(),
    openStackedNerdlet: jest.fn(),
    replaceNerdlet: jest.fn(),
};
export const nerdlet = {
    setUrlState: jest.fn(),
    setConfig: jest.fn(),
};

const reactComponentCallbacks = Object.create(null);

export function registerReactComponentCallback(component, fn) {
    reactComponentCallbacks[component] = fn;
}
