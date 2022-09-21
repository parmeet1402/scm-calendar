export default {
  title: 'DnD/Wrapper',
};

const ScmContentChip = `<scm-content-chip><span slot="text">Event 3</span></scm-content-chip>`;

const Template = args => `
<draggable-wrapper>
${args.ScmContentChip}
</draggable-wrapper>
`;

export const Example = Template.bind({});

Example.args = {
  ScmContentChip,
};
