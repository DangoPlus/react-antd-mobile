import SimpleLayout from '@/components/SimpleLayout';
import RouterView from '@/routes';

export default function (props: any) {
  console.log(props);
  if (props.location.pathname === '/login') {
    return <SimpleLayout>{props.children}</SimpleLayout>;
  }

  return (
    <>
      <RouterView />
    </>
  );
}
