'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/ui/common/button';
import { Form, FormFieldInput, FormMessage } from '@/ui/common/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SendResetPasswordLinkSchema } from '@/lib/validation';
import { sendResetPasswordLink } from '@/lib/actions/auth/reset-password';
import { zodResolver } from '@hookform/resolvers/zod';

const TITLE = 'Reset your password';
const TEXT =
  'Please enter email used for registration and we will send you link to set new password.';
const TITLE_NOT_FOUND_LINK = 'Link Not Found or Expired';
const TEXT_NOT_FOUND_LINK =
  'The link to reset your password was not found or has expired. Please enter your email below to receive a new password reset link.';

export function SendLinkForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const notFoundLink = searchParams.get('not-found-link');
  const [error, setError] = useState<string | null>();

  const form = useForm<z.infer<typeof SendResetPasswordLinkSchema>>({
    resolver: zodResolver(SendResetPasswordLinkSchema),
    defaultValues: {
      email: email || '',
    },
  });

  const onSubmit = (values: z.infer<typeof SendResetPasswordLinkSchema>) => {
    setError(null);

    sendResetPasswordLink(values.email).then((value) => {
      if (value?.message) setError(value.message);
    });
  };

  const title = notFoundLink ? TITLE_NOT_FOUND_LINK : TITLE;
  const text = notFoundLink ? TEXT_NOT_FOUND_LINK : TEXT;
  const buttonText = notFoundLink ? 'Resend email' : 'Send email';

  return (
    <div className="w-80 rounded-md bg-white p-6">
      <div className="prose-lg mb-4 text-center">{title}</div>
      <div className="prose-sm mb-4">{text}</div>

      <Form {...form}>
        {error && (
          <div className="mb-4 [&>div]:mb-2">
            <FormMessage>{error}</FormMessage>
          </div>
        )}

        <form onSubmit={form.handleSubmit(onSubmit)} className="[&>div]:mb-4">
          <FormFieldInput name="email" label="Email" />

          <Button type="submit" className="mt-2 w-full">
            {buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
}
