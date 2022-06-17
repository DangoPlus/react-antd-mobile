import SimpleLayout from '@/components/SimpleLayout';
import RouterView from '@/routes';

export default function (props: any) {
  // console.log(props)
  if (
    props.children.location.pathname === '/login' ||
    props.children.location.pathname === '/qr'
  ) {
    return <SimpleLayout>{props.children}</SimpleLayout>;
  }

  return (
    <>
      <RouterView />
    </>
  );
}
