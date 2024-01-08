interface Props {
  params: { id: string };
}

export default function Detail({ params }: Props) {
  return <h1 className="text-center text-4xl">ini Detail {params.id} </h1>;
}
