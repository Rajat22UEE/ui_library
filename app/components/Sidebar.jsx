export default function Sidebar() {
    const uiComponents = [
      'Accordion',
      'Alert',
      'Alert Dialog',
      'Aspect Ratio',
      'Avatar',
      'Badge',
      'Breadcrumb',
      'Button',
      'Calendar',
      'Card',
      'Carousel',
      'Chart',
      'Checkbox',
      'Collapsible',
      'Combobox',
      'Command',
      'Context Menu',
      'Data Table',
      'Date Picker',
      'Dialog',
      'Drawer',
      'Dropdown Menu',
      'Form',
      'Hover Card',
      'Input',
      'Input OTP',
      'Label',
      'Menubar',
      'Navigation Menu',
      'Pagination',
      'Popover',
      'Progress',
      'Radio Group',
      'Resizable',
      'Scroll Area',
      'Select',
      'Separator',
      'Sheet',
      'Sidebar',
      'Skeleton',
      'Slider',
      'Sonner',
      'Switch',
      'Table',
      'Tabs',
      'Textarea',
      'Toast',
      'Toggle',
      'Toggle Group',
      'Tooltip'
    ];
  
    return (
      <div className="sticky top-[4rem] w-64 p-4 rounded-lg border border-[#27272A] h-screen">
        <h2 className="text-xl font-bold text-white">UI Components</h2>
        <ul className="mt-4 text-[#FAFAFA] overflow-y-auto max-h-[calc(110vh-160px)]  ">
          {uiComponents.map((component, index) => (
            <li
              key={index}
              className="py-2 px-4 w-full rounded-lg hover:bg-[#27272A] transition-colors duration-200"
            >
              {component}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  