'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from './schema';
import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui';
import { useState } from 'react';
import { SendIcon } from 'lucide-react';
import { motion } from 'motion/react';

type ContactFormData = {
  name: string;
  email: string;
  message?: string;
  phone?: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', data);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full max-w-2xl mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* Name Field */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='What should I call you?'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='your.email@example.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input
                    type='tel'
                    placeholder='+1 (555) 123-4567'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <textarea
                    rows={5}
                    placeholder='Tell me about your project, or just say hi! 👋'
                    className='flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-vertical'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isSubmitting}
            className='text-base font-medium group sm:w-fit w-full'>
            {isSubmitting ? (
              <>
                <div className='animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent' />
                Sending your message...
              </>
            ) : (
              <span className='flex items-center gap-2'>
                Send Message{' '}
                <span className='transition-transform duration-500 group-hover:rotate-45'>
                  <SendIcon className='w-4 h-4' />
                </span>
              </span>
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className='p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 animate-in fade-in-0 slide-in-from-top-1'>
              <p className='font-medium'>Message sent successfully! 🎉</p>
              <p className='text-sm'>I'll get back to you soon!</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className='p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 animate-in fade-in-0 slide-in-from-top-1'>
              <p className='font-medium'>Oops! Something went wrong 😅</p>
              <p className='text-sm'>
                Please try again or contact me directly.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
