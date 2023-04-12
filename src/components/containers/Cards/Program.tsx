import { Image, LinkButton, Text } from '@/components';
import { ProgramCardProps } from '@/interfaces';

const ProgramCard = ({
  image,
  imageAltText,
  title,
  content,
  buttonText,
}: ProgramCardProps) => {
  return (
    <div className='gradient-1 max-w-sm rounded-2'>
      <div className='m-[1px] rounded-2 bg-dark p-4'>
        <Image
          className='m-auto w-3/5 rounded-t-lg'
          src={`${image}`}
          alt={imageAltText}
        />
        <div className='pt-4'>
          <Text level='h5' className='heading-5'>
            {title}
          </Text>
          <Text level='p' className='pre-title mt-1 text-grey'>
            {content}
          </Text>
          <LinkButton
            href='#'
            className='mt-3 block'
            buttonProps={{
              variant: 'PRIMARY',
              text: buttonText,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
